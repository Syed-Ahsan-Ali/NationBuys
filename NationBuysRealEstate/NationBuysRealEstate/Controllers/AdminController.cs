using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NationBuysRealEstate.Controllers
{
    //[Authorize]
    public class AdminController : Controller
    {
        //
        // GET: /Admin/
        NationBuysRealEsateEntities obj = new NationBuysRealEsateEntities();
        public ActionResult Index()
        {
            return View();
        }

        // GET: /Admin/
        //public ActionResult Index1()
        //{
        //    return View();
        //}

        public ActionResult AddProperty()
        {
            return View();
        }

        public ActionResult Blog()
        {
            return View(obj.Blogs.ToList());
        }

        public ActionResult FileRate()
        {
            return View(obj.FileRates.ToList());
        }

        public ActionResult EditFileRate(int id)
        {
            return View(obj.FileRates.Where(p => p.Id == id).First());
        }

        public ActionResult AddFileRate()
        {
            return View();
        }

        public ActionResult DeleteFileRate(int id)
        {
            return View(obj.FileRates.Where(p => p.Id == id).First());
        }

        public ActionResult EditBlog(int id)
        {
            return View(obj.Blogs.Where(p => p.Id == id).First());
        }

        public ActionResult AddBlog()
        {
            return View();
        }

        public ActionResult DeleteBlog(int id)
        {
            return View(obj.Blogs.Where(p => p.Id == id).First());
        }

        public ActionResult Maps()
        {
            return View(obj.Maps.ToList());
        }

        public ActionResult EditMap(int id)
        {
            return View(obj.Maps.Where(p => p.Id == id).First());
        }

        public ActionResult AddMap()
        {
            return View();
        }
        public ActionResult DeleteMp(int id)
        {
            obj.Maps.Remove(obj.Maps.Where(p => p.Id == id).First());
            obj.SaveChanges();
            return RedirectToAction("Maps", "Admin");
        }
        public ActionResult UploadMap()
        {
            try
            {
                if (Request.Files.Count > 0)
                {
                    HttpPostedFileBase file = Request.Files[0];
                    string img = @"~/wp-content/uploads/Maps/" + file.FileName.Replace(' ','_' );
                    file.SaveAs(Server.MapPath(img));

                    Map m = new Map();
                    m.Society_Name = Request["Society_Name"];
                    m.Map_Image = @"~/wp-content/uploads/Maps/" + file.FileName.Replace(' ', '_'); 
                    obj.Maps.Add(m);
                    obj.SaveChanges();
                }

            }
            catch (DbEntityValidationException e)
            {
                foreach (var validationErrors in e.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        Trace.TraceInformation("Property: {0} Error: {1}",
                                                validationError.PropertyName,
                                                validationError.ErrorMessage);
                    }
                }
            }
            return RedirectToAction("Maps", "Admin");
        }
        public ActionResult DeleteMap(int id)
        {
            return View(obj.Maps.Where(p => p.Id == id).First());
        }
    }
}