using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using NationBuysRealEstate;
//using System.Data.Entity.Validation;

using System.Diagnostics;
using System.Web.Mvc;
using NationBuysRealEstate.Models;

namespace RealEstateUpdate2.Controllers
{
    public class HomeController : Controller
    {
        // RealEstateEntities1 Entities = new RealEstateEntities1();
        // GET: Home
        NationBuysRealEsateEntities obj = new NationBuysRealEsateEntities();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Properties()
        {
            return View(obj.Properties.ToList());
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
        public ActionResult propertiesIIIColumnWithoutsidebar()
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

        public ActionResult PropertyDetails(int id)
        {
            PropertyDetail details = new PropertyDetail();
            details.Property = obj.Properties.Where(p => p.Id == id).First();
            if(details.Property.Amenities==null)
            {
                details.Property.Amenities = "default";
            }
            details.Users= obj.Users.Where(p => p.Id == id).FirstOrDefault();
            details.Room= obj.Rooms.Where(p => p.Id == id).FirstOrDefault();
            details.Address= obj.Addresses.Where(p => p.Id == id).FirstOrDefault();
            return View(details);
        }

        public ActionResult AboutUs()
        {
            return View();
        }
        public ActionResult Agent()
        {
            return View(obj.Users.ToList().Where(p => p.User_Type == "Agent" || p.User_Type == "Admin"));
        }
        public ActionResult AgentDetails(int id)
        {
                return View(obj.Users.ToList().Where(p => p.Id == id).First());
        }
        public ActionResult Agencies()
        {
            return View();
        }
        public ActionResult AgencyDetails()
        {
            return View();
        }
        public ActionResult Property_Search()
        {
            //string type, string location, string minP; string maxP; string beds; string baths; string floors; string garrage; string builder; string area;


            var list = GetPropDetails(Request["searchby"]);
            var temp = list;
            if(Request["ptype"]!="Any" && Request["ptype"] != null)
            {
                temp = list.Where(p => p.Property.Property_type == Request["ptype"]).ToList();
                if(temp!=null && temp.Count!=0)
                {
                    list = temp;
                }
            }
            if(Request["plocation"] !="Any" && Request["plocation"] != null)
            {
                temp = list.Where(p => p.Address.Area_Name == Request["plocation"]).ToList();
                if (temp != null && temp.Count!=0)
                {
                    list = temp;
                }
            }
            if (Request["minprice"] != "Any" && Request["minprice"] != null)
            {
                temp = list.Where(p => p.Property.Price >= int.Parse(Request["minprice"])).ToList();
                if (temp != null && temp.Count != 0)
                {
                    list = temp;
                }
            }
            if (Request["maxprice"] != "Any" && Request["maxprice"] != null)
            {
                temp = list.Where(p => p.Property.Price <= int.Parse(Request["maxprice"])).ToList();
                if (temp != null && temp.Count != 0)
                {
                    list = temp;
                }
            }
            if (Request["pbeds"] != "Any" && Request["pbeds"] != null)
            {
                temp = list.Where(p => p.Property.Beds == int.Parse(Request["pbeds"])).ToList();
                if (temp != null && temp.Count != 0)
                {
                    list = temp;
                }
            }
            if (Request["pbaths"] != "Any" && Request["pbaths"] != null)
            {
                temp = list.Where(p => p.Property.Baths == int.Parse(Request["pbaths"])).ToList();
                if (temp != null && temp.Count != 0)
                {
                    list = temp;
                }
            }
            if (Request["pfloors"] != "Any" && Request["pfloors"] != null)
            {
                temp = list.Where(p => p.Property.Floors == int.Parse(Request["pfloors"])).ToList();
                if (temp != null && temp.Count != 0)
                {
                    list = temp;
                }
            }
            if (Request["pgarages"] != "Any" && Request["pgarages"] != null)
            {
                temp = list.Where(p => p.Property.Garrage == int.Parse(Request["pgarages"])).ToList();
                if (temp != null && temp.Count != 0)
                {
                    list = temp;
                }
            }
            if (Request["pBuilder"] != "Any" && Request["pBuilder"] != null)
            {
                //temp = list.Where(p => p.Property_type == Request["pBuilder"]).ToList();
                //if (temp != null)
                //{
                //    list = temp;
                //}
            }
            if (Request["Area"] != "Any" && Request["Area"] != null)
            {
                temp = list.Where(p => int.Parse(p.Property.Area) == int.Parse(Request["Area"])).ToList();
                if (temp != null && temp.Count != 0)
                {
                    list = temp;
                }
            }
            if (Request["Amenities"] != "Any" && Request["Amenities"] !=null)
            {
                //temp = list.Where(p => p.Property_type == Request["Amenities"]).ToList();
                //if (temp != null)
                //{
                //    list = temp;
                //}
            }
            return View(list);
        }

        private List<PropertyDetail> GetPropDetails(string type)
        {
            List<PropertyDetail> list = new List<PropertyDetail>();
            if(type=="All")
            {
                var temp = obj.Properties.ToList();
                foreach (var item in temp)
                {
                    PropertyDetail prop = new PropertyDetail();
                    prop.Property = item;
                    prop.Address = obj.Addresses.Where(p => p.Property_id == item.Id).FirstOrDefault();
                    prop.Room = obj.Rooms.Where(p => p.Property_Id == item.Id).FirstOrDefault();
                    list.Add(prop);
                }
            }
            else
            {
                var temp = obj.Properties.Where(p => p.Property_For == type).ToList();
                foreach (var item in temp)
                {
                    PropertyDetail prop = new PropertyDetail();
                    prop.Property = item;
                    prop.Address = obj.Addresses.Where(p => p.Property_id == item.Id).FirstOrDefault();
                    prop.Room = obj.Rooms.Where(p => p.Property_Id == item.Id).FirstOrDefault();
                    list.Add(prop);
                }
            }
            return list;
        }
        public ActionResult SearchPropertyForRent()
        {

            return View();
        }
        public ActionResult SearchAllPropertyForSale()
        {

            return View();
        }


    }
}