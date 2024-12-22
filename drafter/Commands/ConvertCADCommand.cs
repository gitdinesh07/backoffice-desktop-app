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
                // Step 1: Select a CAD file using OpenFileDialog
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

                // Step 2: Validate the file
                if (!File.Exists(cadFilePath))
                {
                    TaskDialog.Show("Error", "The selected file does not exist.");
                    return Result.Failed;
                }

                // Step 3: Get the active Revit document and view
                UIDocument uiDoc = commandData.Application.ActiveUIDocument;
                Document doc = uiDoc.Document;
                Autodesk.Revit.DB.View activeView = uiDoc.ActiveView;

                if (!(activeView is ViewPlan || activeView is ViewSheet))
                {
                    TaskDialog.Show("Error", "Please run this command in a plan or sheet view.");
                    return Result.Failed;
                }

                // Step 4: Define DWG import options
                DWGImportOptions importOptions = new DWGImportOptions
                {
                    Placement = ImportPlacement.Origin,
                    ColorMode = ImportColorMode.BlackAndWhite,
                    OrientToView = true, // Align CAD file to the view plane
                    Unit = ImportUnit.Default
                };

                // Step 5: Import the CAD file and fetch its elements
                using (Transaction transaction = new Transaction(doc, "Import CAD File"))
                {
                    transaction.Start();

                    ElementId importedElementId;
                    bool success = doc.Import(cadFilePath, importOptions, activeView, out importedElementId);

                    if (success)
                    {

                        TaskDialog.Show("Success", "CAD file imported successfully and elements fetched.");
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
                // Handle exceptions
                message = ex.Message;
                return Result.Failed;
            }
        }



    }
}
