using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
//using System.Data.Entity.Validation;

using System.Diagnostics;
using System.Web.Mvc;

namespace RealEstateUpdate2.Controllers
{
    public class HomeController : Controller
    {
       // RealEstateEntities1 Entities = new RealEstateEntities1();
        // GET: Home
        public ActionResult Index()
        {
            return View();   
        }
        
        public ActionResult Properties()
        {
            return View();
        }
        public ActionResult ContactUs()
        {
            return View();
        }
        public ActionResult blogIColumnWithLeftsidebar()
        {
            return View();
        }
        public ActionResult blogIColumnWithoutsidebar()
        {
            return View();
        }
        public ActionResult blogIColumnWithRightsidebar()
        {
            return View();
        }
        public ActionResult blogIIColumnWithLeftsidebar()
        {
            return View();
        }
        public ActionResult blogIIColumnWithoutsidebar()
        {
            return View();
        }
        public ActionResult blogIIColumnWithRightsidebar()
        {
            return View();
        }
        public ActionResult propertiesIIColumnWithLeftsidebar()
        {
            return View();
        }
        public ActionResult propertiesIIColumnWithoutsidebar()
        {
            return View();
        }
        public ActionResult propertiesIIColumnWithRightsidebar()
        {
            return View();
        }
        public ActionResult propertiesIIIColumnWithLeftsidebar()
        {
            return View();
        }
        public ActionResult propertiesIIIColumnWithoutsidebar()
        {
            return View();
        }
        public ActionResult propertiesIIIColumnWithRightsidebar()
        {
            return View();
        }
        public ActionResult propertiesIVColumnWithLeftsidebar()
        {
            return View();
        }
        public ActionResult propertiesIVColumnWithoutsidebar()
        {
            return View();
        }
        public ActionResult propertiesIVColumnWithRightsidebar()
        {
            return View();
        }
        public ActionResult Login()
        {
            //try
            //{
               // string password = Request["user_pass"].ToString();
               // string username = Request["user_login1"].ToString();
               // var result = Entities.Users.Where(x => x.Username == username && x.Password == password).FirstOrDefault();
               // if (result != null)
                //{
                  //  RedirectToAction("Index", "Admin");
                //}
            //} catch (Exception e)
            //{
              //  return View();
            //}
            return View();
        }
        public ActionResult AboutUs()
        {
            return View();
        }
        public ActionResult Agent()
        {
            return View();
        }
        public ActionResult AgentDetails()
        {
            return View();
        }
        public ActionResult Agencies()
        {
            return View();
        }
        public ActionResult AgencyDetails()
        {
            return View();
        }
    }
}