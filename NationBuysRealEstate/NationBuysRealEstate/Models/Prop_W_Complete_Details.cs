using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NationBuysRealEstate.Models
{
    public class Prop_W_Complete_Details
    {
       public Property Property { set; get; }
        public Room Room { set; get; }
        public Address Address { set; get; }
    }
}