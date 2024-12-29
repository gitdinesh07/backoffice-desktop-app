using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Autodesk.Revit.Attributes;
using Autodesk.Revit.DB;
using Autodesk.Revit.UI;
using Aspose.CAD;
using Aspose.CAD.FileFormats.Cad;
using Aspose.CAD.FileFormats.Cad.CadTables;
using Aspose.CAD.FileFormats.Cad.CadObjects.Polylines;
using Aspose.CAD.FileFormats.Cad.CadObjects;
using System.Security.Principal;
using Aspose.CAD.FileFormats.Cgm;


namespace drafter.Commands
{
    [Transaction(TransactionMode.Manual)]
    [Regeneration(RegenerationOption.Manual)]
    public class ConvertCADCommand : IExternalCommand
    {

        public Result Execute(ExternalCommandData commandData, ref string message, ElementSet elements)
        {
            try
            {
                // Step 1: Prompt user to select a CAD file
                OpenFileDialog openFileDialog = new OpenFileDialog
                {
                    Title = "Select a CAD File to Import",
                    Filter = "CAD Files (*.dwg;*.dxf)|*.dwg;*.dxf",
                    Multiselect = false
                };

                if (openFileDialog.ShowDialog() != DialogResult.OK)
                {
                    TaskDialog.Show("Cancelled", "No file was selected.");
                    return Result.Cancelled;
                }

                string cadFilePath = openFileDialog.FileName;

                // Step 2: Validate the selected file
                if (string.IsNullOrWhiteSpace(cadFilePath) || !File.Exists(cadFilePath))
                {
                    TaskDialog.Show("Error", "The selected file does not exist or is invalid.");
                    return Result.Failed;
                }

                // Step 3: Read layers and blocks using Aspose.CAD
                using (CadImage cadImage = (CadImage)Image.Load(cadFilePath))
                {
                    string layerInfo = $"Layers in the file:\n";

                    //Extract layers
                    foreach (CadLayerTable layer in cadImage.Layers)
                    {
                        if (layer.Name == "A-Wall")
                        {
                            //fetchA_WALL(layer, layerInfo);
                        }
                        layerInfo += $"- {layer.Name} (Color: {layer.ColorId})\n";
                    }


                    var wallCount = cadImage.Entities.Where(w => w.LayerName.Equals("A-WALL")).Count();
                    using (StreamWriter writer = new StreamWriter("output.txt"))
                    {
                        foreach (var entity in cadImage.Entities)
                        {
                            if (entity.LayerName.Equals("A-WALL"))
                            {

                                var line = (CadLine)entity;

                                // Extract start and end points
                                double x1 = line.FirstPoint.X;
                                double y1 = line.FirstPoint.Y;
                                double x2 = line.SecondPoint.X;
                                double y2 = line.SecondPoint.Y;

                                // Calculate length
                                double length = Math.Sqrt(Math.Pow(x2 - x1, 2) + Math.Pow(y2 - y1, 2));

                                // Output details
                                layerInfo += $"Line: Start ({x1}, {y1}) - End ({x2}, {y2}), Length: {length:F2}";

                                writer.WriteLine($"\nLength: {length:F2} -- Line: Start ({x1}, {y1}) - End ({x2}, {y2})");

                            }


                        }
                    }

                    // Extract blocks
                    string blockInfo = "Blocks in the file:\n";
                    foreach (CadBlockTableObject block in cadImage.BlocksTables)
                    {
                        blockInfo += $"- {block.BlockName}\n";
                    }

                    TaskDialog.Show("CAD File Info", layerInfo + "\n" + blockInfo);
                }

                // Step 4: Get the active Revit document and view
                UIDocument uiDoc = commandData.Application.ActiveUIDocument;
                Document doc = uiDoc.Document;
                Autodesk.Revit.DB.View activeView = uiDoc.ActiveView;

                if (activeView == null || !(activeView is ViewPlan || activeView is ViewSheet))
                {
                    TaskDialog.Show("Error", "Please run this command in a plan or sheet view.");
                    return Result.Failed;
                }

                // Step 5: Define DWG import options
                DWGImportOptions importOptions = new DWGImportOptions
                {
                    Placement = ImportPlacement.Origin,
                    ColorMode = ImportColorMode.BlackAndWhite,
                    OrientToView = true, // Align CAD file to the view plane
                    Unit = ImportUnit.Default
                };

                // Step 6: Import the CAD file
                using (Transaction transaction = new Transaction(doc, "Import CAD File"))
                {
                    transaction.Start();

                    if (doc.Import(cadFilePath, importOptions, activeView, out ElementId importedElementId))
                    {
                        TaskDialog.Show("Success", "CAD file imported successfully.");
                        transaction.Commit();
                        return Result.Succeeded;
                    }
                    else
                    {
                        TaskDialog.Show("Error", "Failed to import the CAD file.");
                        transaction.RollBack();
                        return Result.Failed;
                    }
                }
            }
            catch (Exception ex)
            {
                // Log and display the exception message
                message = ex.Message;
                TaskDialog.Show("Error", $"An unexpected error occurred: {ex.Message}");
                return Result.Failed;
            }
        }

        //public Result Execute(ExternalCommandData commandData, ref string message, ElementSet elements)
        //{
        //    try
        //    {
        //        string cadFilePath = FileSelection();
        //        using (CadImage cadImage = (CadImage)Image.Load(cadFilePath))
        //        {

        //            var wallCount = cadImage.Entities.Where(w => w.LayerName.Equals("A-WALL")).Count();
        //            string layerInfo = $"{wallCount}Layers in the file:\n";
        //            var lines = new List<((double, double), (double, double))>();
        //            foreach (var entity in cadImage.Entities.Where(w => w.LayerName.Equals("A-WALL")).ToList())
        //            {
        //                if (entity.LayerName.Equals("A-WALL"))
        //                {
        //                    if (entity is CadLine line)
        //                    {
        //                        //CreateRevitBasicWall(commandData, line);
        //                        layerInfo += $"  Line: Start ({line.FirstPoint.X}, {line.FirstPoint.Y}) - End ({line.SecondPoint.X}, {line.SecondPoint.Y})\n";
        //                        //return Result.Succeeded;
        //                        lines.Add(((line.FirstPoint.X, line.FirstPoint.Y), (line.SecondPoint.X, line.SecondPoint.Y)));
        //                    }

        //                }
        //            }

        //            // Find all pairs of parallel lines
        //            var parallelPairs = new List<((double, double), (double, double), (double, double), (double, double))>();

        //            for (int i = 0; i < lines.Count; i++)
        //            {
        //                for (int j = i + 1; j < lines.Count; j++)
        //                {
        //                    var vec1 = DirectionVector(lines[i].Item1, lines[i].Item2);
        //                    var vec2 = DirectionVector(lines[j].Item1, lines[j].Item2);

        //                    if (AreParallel(vec1, vec2))
        //                    {
        //                        parallelPairs.Add((lines[i].Item1, lines[i].Item2, lines[j].Item1, lines[j].Item2));
        //                    }
        //                }
        //            }

        //            // Output parallel line pairs
        //            Console.WriteLine("Parallel Lines:");
        //            int ir = 0;
        //            foreach (var pair in parallelPairs)
        //            {

        //                System.Diagnostics.Debug.WriteLine(ir);
        //                System.Diagnostics.Debug.WriteLine($"Line 1: Start({pair.Item1.Item1}, {pair.Item1.Item2}) - End({pair.Item2.Item1}, {pair.Item2.Item2})");
        //                System.Diagnostics.Debug.WriteLine($"Line 2: Start({pair.Item3.Item1}, {pair.Item3.Item2}) - End({pair.Item4.Item1}, {pair.Item4.Item2})");
        //                ir++;
        //            }
        //        }

        //        return Result.Succeeded;

        //    }
        //    catch (Exception ex)
        //    {
        //        message = ex.Message;
        //        TaskDialog.Show("Error", $"An unexpected error occurred: {ex.Message}");
        //        return Result.Failed;
        //    }
        //}

        static (double, double) DirectionVector((double, double) start, (double, double) end)
        {
            return (end.Item1 - start.Item1, end.Item2 - start.Item2);
        }

        // Function to check if two direction vectors are parallel
        static bool AreParallel((double, double) vec1, (double, double) vec2)
        {
            // Use cross-product to check parallelism
            return Math.Abs(vec1.Item1 * vec2.Item2 - vec1.Item2 * vec2.Item1) < 1e-6;
        }

        private void CreateRevitBasicWall(ExternalCommandData commandData, CadLine line)
        {
            try
            {
                // Get the current document
                Document doc = commandData.Application.ActiveUIDocument.Document;

                // Start a transaction
                using (Transaction tx = new Transaction(doc, "Create Wall"))
                {
                    tx.Start();

                    // Define wall type
                    WallType wallType = new FilteredElementCollector(doc)
                        .OfClass(typeof(WallType))
                        .FirstOrDefault(e => e.Name == "Basic Wall") as WallType;

                    var wallTypes = new FilteredElementCollector(doc).OfClass(typeof(WallType)).ToList();

                    // Define the start and end points for the wall (line)
                    XYZ startPoint = new XYZ(line.FirstPoint.X, line.FirstPoint.Y, line.FirstPoint.Z); // Start point (x, y, z)
                    XYZ endPoint = new XYZ(line.SecondPoint.X, line.SecondPoint.Y, line.SecondPoint.Z); // End point (x, y, z)

                    // Create the line for the wall
                    Line wallLine = Line.CreateBound(startPoint, endPoint);

                    // Create the wall
                    Wall newWall = Wall.Create(doc, wallLine, new ElementId(216764), doc.ActiveView.GenLevel.Id, 7000, 0, false, false);

                    // Commit the transaction
                    tx.Commit();
                }
            }
            catch (Exception ex)
            {
                TaskDialog.Show("Error", $"An unexpected error occurred: {ex.Message}");
            }


        }

        private string FileSelection()
        {
            string cadFilePath = string.Empty;

            // Step 1: Prompt user to select a CAD file
            OpenFileDialog openFileDialog = new OpenFileDialog
            {
                Title = "Select a CAD File to Import",
                Filter = "CAD Files (*.dwg;*.dxf)|*.dwg;*.dxf",
                Multiselect = false
            };

            if (openFileDialog.ShowDialog() != DialogResult.OK)
            {
                TaskDialog.Show("Cancelled", "No file was selected.");
                return "";
            }

            cadFilePath = openFileDialog.FileName;

            // Step 2: Validate the selected file
            if (string.IsNullOrWhiteSpace(cadFilePath) || !File.Exists(cadFilePath))
            {
                TaskDialog.Show("Error", "The selected file does not exist or is invalid.");
                return "";
            }
            return cadFilePath;
        }


    }
}