using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.Revit.Attributes;
using Autodesk.Revit.DB;
using Autodesk.Revit.UI;  

namespace drafter.Commands
{
    [Transaction(TransactionMode.Manual)]
    [Regeneration(RegenerationOption.Manual)]
    public class ConvertCADCommandV3 : IExternalCommand
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

        private void ReadDwgFile(string cadFilePath)
        {
            using (Database db = new Database(false, true))
            {
                db.ReadDwgFile(cadFilePath, FileShare.Read, true, null);
                Console.WriteLine("DWG file loaded successfully.");
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
    }
}
