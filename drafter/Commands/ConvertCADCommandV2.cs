using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Windows.Forms;
using Aspose.CAD;
using Aspose.CAD.FileFormats.Cad;
using Aspose.CAD.FileFormats.Cad.CadObjects;
using Aspose.CAD.FileFormats.Cad.CadTables;
using Aspose.CAD.ImageOptions;
using Autodesk.Revit.Attributes;
using Autodesk.Revit.DB;
using Autodesk.Revit.UI;

namespace drafter.Commands
{
    [Transaction(TransactionMode.Manual)]
    [Regeneration(RegenerationOption.Manual)]
    public class ConvertCADCommandV2 : IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData, ref string message, ElementSet elements)
        {
            try
            {
                string cadFilePath = FileSelection();

                ReadDwgFile(cadFilePath);

                return Result.Succeeded;
            }
            catch (Exception ex)
            {
                TaskDialog.Show("Error", $"An unexpected error occurred: {ex.Message}");
                return Result.Failed;
            }
        }

        private string FileSelection()
        {
            string cadFilePath = string.Empty;

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

            if (string.IsNullOrWhiteSpace(cadFilePath) || !File.Exists(cadFilePath))
            {
                TaskDialog.Show("Error", "The selected file does not exist or is invalid.");
                return "";
            }
            return cadFilePath;
        }

        //private void ReadDwgFile(string filePath)
        //{
        //    CadImage cadImage = (CadImage)Image.Load(filePath);

        //    // Retrieve and print the layers in the DWG file
        //    var layers = cadImage.Layers;
        //    Console.WriteLine("Layers:");
        //    foreach (CadLayerTable layer in layers)
        //    {
        //        System.Diagnostics.Debug.WriteLine($"- Layer Name: {layer.Name}, Layer Type: {layer.ToString()}");
        //        System.Diagnostics.Debug.WriteLine("");

        //    }

        //    // Retrieve and print the blocks in the DWG file
        //    var blocks = cadImage.BlocksTables;
        //    Console.WriteLine("Blocks:");
        //    foreach (CadBlockTableObject block in blocks)
        //    {
        //        System.Diagnostics.Debug.WriteLine($"- Block Name: {block.BlockName}");
        //        System.Diagnostics.Debug.WriteLine("");
        //    }
        //}

        private void ReadDwgFile(string filePath)
        {
            try
            {
                string outputPath = "output.png";
                using (StreamWriter writer = new StreamWriter("output.txt"))
                {
                    using (CadImage cadImage = (CadImage)Image.Load(filePath))
                    {
                        // Display general information
                        writer.WriteLine($"File loaded. Dimensions: {cadImage.Width}x{cadImage.Height}");

                        // List layers
                        foreach (CadLayerTable layer in cadImage.Layers)
                        {
                            writer.WriteLine($"Layer: {layer.Name}, Visible: {layer.IsSoftOwnerSet}");
                        }

                        // List entities
                        foreach (var entity in cadImage.Entities)
                        {
                            if (entity.LayerName.Equals("A-WALL"))
                            {
                                if (entity is CadLine line)
                                {
                                    writer.WriteLine($"Line: Start ({line.FirstPoint.X}, {line.FirstPoint.Y}) - End ({line.SecondPoint.X}, {line.SecondPoint.Y}) ");
                                }
                            }
                        }

                        // Export to PNG
                        CadRasterizationOptions rasterOptions = new CadRasterizationOptions
                        {
                            PageWidth = 1600,
                            PageHeight = 1600,
                            BackgroundColor = Aspose.CAD.Color.White
                        };

                        PngOptions pngOptions = new PngOptions
                        {
                            VectorRasterizationOptions = rasterOptions
                        };

                        cadImage.Save(outputPath, pngOptions);
                    }
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }

            //if (!File.Exists(filePath))
            //{
            //    Console.WriteLine("File not found.");
            //    return;
            //}

            //CadImage cadImage = (CadImage)Image.Load(filePath);

            //using (StreamWriter writer = new StreamWriter("output.txt"))
            //{
            //    // Retrieve and print the detailed layers in the DWG file
            //    var layers = cadImage.Layers;
            //    writer.WriteLine("Layers:");
            //    foreach (CadLayerTable layer in layers)
            //    {
            //        writer.WriteLine($"- Layer Name: {layer.Name}, Layer Type: {layer.GetType()}");
            //        writer.WriteLine($"  Flags: {layer.Flags}, ColorId: {layer.ColorId}");
            //        writer.WriteLine($"  LineTypeName: {layer.LineTypeName}, LineWeight: {layer.LineWeight}");
            //        writer.WriteLine("");
            //    }

            //    // Retrieve and print the detailed blocks in the DWG file
            //    var blocks = cadImage.BlocksTables;
            //    writer.WriteLine("Blocks:");
            //    foreach (CadBlockTableObject block in blocks)
            //    {
            //        writer.WriteLine($"- Block Name: {block.BlockName}");
            //        writer.WriteLine($"  BlockInsertionUnits: {block.BlockInsertionUnits}, BlockScalability: {block.BlockScalability}");
            //        writer.WriteLine($"  BlockExplodability: {block.BlockExplodability}, `12345" +
            //            $": {block.IsAnonymous}");
            //        writer.WriteLine($"  BlockIsXRef: {block.BlockIsXRef}, OriginalBlockName: {block.OriginalBlockName}");
            //        writer.WriteLine("");
            //    }

            //    var wallCount = cadImage.Entities.Where(w => w.LayerName.Equals("A-WALL")).Count();
            //    writer.WriteLine("Lines:");
            //    foreach (var entity in cadImage.Entities)
            //    {
            //        if (entity.LayerName.Equals("A-WALL"))
            //        {
            //            if (entity is CadLine line)
            //            {
            //                writer.WriteLine($"  Line: Start ({line.FirstPoint.X}, {line.FirstPoint.Y}) - End ({line.SecondPoint.X}, {line.SecondPoint.Y})\n");
            //            }
            //        }
            //    }
            //}
            //Console.WriteLine("Data written to output.txt");
        }




    }
}
