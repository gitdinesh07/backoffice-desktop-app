using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Autodesk.Revit.UI;
using System.Windows.Media.Imaging;
using System.IO;

namespace drafter
{
    public class AppCommand : IExternalApplication
    {
        // Add Ribbon and Buttons
        public Result OnStartup(UIControlledApplication application)
        {
            try
            {
                // Define Ribbon Tab
                string tabName = "Drafter";
                application.CreateRibbonTab(tabName);

                // Define Ribbon Panels
                RibbonPanel cadPanel = application.CreateRibbonPanel(tabName, "CAD Tools");
                RibbonPanel sheetPanel = application.CreateRibbonPanel(tabName, "Sheet Tools");
                RibbonPanel excelPanel = application.CreateRibbonPanel(tabName, "Excel Tools");
                RibbonPanel mepPanel = application.CreateRibbonPanel(tabName, "MEP Tools");

                // Assembly Path
                string assemblyPath = Assembly.GetExecutingAssembly().Location;

                // Add Buttons for Each Function
                AddButton(cadPanel, "ConvertCAD", "Convert CAD", assemblyPath, "drafter.Commands.ConvertCADCommandV2", "Convert CAD drawing into Revit elements");
                AddButton(cadPanel, "AutoAnnotate", "Auto Annotation", assemblyPath, "drafter.Commands.AutoAnnotationCommand", "Perform Auto Annotation");
                AddButton(cadPanel, "AutoDimension", "Auto Dimension", assemblyPath, "drafter.Commands.AutoDimensionCommand", "Perform Auto Dimensioning");

                AddButton(sheetPanel, "SheetGen", "Sheet Generation", assemblyPath, "drafter.Commands.SheetGenerationCommand", "Generate Sheets");
                AddButton(sheetPanel, "AssignTitle", "Assign Title Block", assemblyPath, "drafter.Commands.AssignTitleBlockCommand", "Assign Title Block and Views");
                AddButton(sheetPanel, "ApplyTemplate", "Apply Template", assemblyPath, "drafter.Commands.ApplyTemplateCommand", "Apply template to multiple sheets");

                AddButton(excelPanel, "FillSpec", "Fill Specification", assemblyPath, "drafter.Commands.FillSpecificationCommand", "Fill Family Specifications via Excel");
                AddButton(excelPanel, "FillUniclass", "Fill Uniclass", assemblyPath, "drafter.Commands.FillUniclassCommand", "Fill Uniclass and Cobie data");

                AddButton(mepPanel, "MEPReroute", "MEP Re-Router", assemblyPath, "drafter.Commands.MEPRerouterCommand", "Re-route MEP elements");
                AddButton(mepPanel, "ClashFlag", "Flag Clash Points", assemblyPath, "drafter.Commands.FlagClashCommand", "Flag clash points");
                AddButton(mepPanel, "RemoveWarn", "Remove Warnings", assemblyPath, "drafter.Commands.RemoveWarningsCommand", "Remove warnings");
                AddButton(mepPanel, "RemoveFilters", "Remove Filters", assemblyPath, "drafter.Commands.RemoveFiltersCommand", "Remove unassigned filters, layers, and templates");

            }
            catch (Exception ex)
            {
                TaskDialog.Show("error", ex.Message);
            }

            return Result.Succeeded;
        }

        public Result OnShutdown(UIControlledApplication application)
        {
            return Result.Succeeded;
        }

        // Helper Method to Add Buttons
        private void AddButton(RibbonPanel panel, string name, string text, string assemblyPath, string className, string tooltip)
        {

            PushButtonData buttonData = new PushButtonData(name, text, assemblyPath, className)
            {
                ToolTip = tooltip,
                LargeImage = new BitmapImage(new Uri(Path.Combine(Path.GetDirectoryName(assemblyPath), "Resources", name + ".png")))
            };
            panel.AddItem(buttonData);


        }
    }
}
