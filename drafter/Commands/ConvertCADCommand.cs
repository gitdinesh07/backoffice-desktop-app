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
                // Use OpenFileDialog to select an AutoCAD file
                OpenFileDialog openFileDialog = new OpenFileDialog
                {
                    Title = "Select an AutoCAD File",
                    Filter = "AutoCAD Files (*.dwg;*.dxf)|*.dwg;*.dxf|All Files (*.*)|*.*",
                    Multiselect = false
                };

                if (openFileDialog.ShowDialog() == DialogResult.OK)
                {
                    string selectedFilePath = openFileDialog.FileName;

                    // Validate the file
                    if (File.Exists(selectedFilePath))
                    {
                        TaskDialog.Show("File Selected", $"You selected: {selectedFilePath}");

                        // Add logic to handle the AutoCAD file
                        // For example, import the CAD file into a Revit project or process it.
                    }
                    else
                    {
                        TaskDialog.Show("Error", "The selected file does not exist.");
                        return Result.Failed;
                    }
                }
                else
                {
                    TaskDialog.Show("Cancelled", "No file was selected.");
                    return Result.Cancelled;
                }

                return Result.Succeeded;
            }
            catch (Exception ex)
            {
                // Handle unexpected errors
                message = ex.Message;
                return Result.Failed;
            }
        }



    }
}
