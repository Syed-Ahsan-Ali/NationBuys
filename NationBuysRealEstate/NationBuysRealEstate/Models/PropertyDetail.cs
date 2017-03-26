using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NationBuysRealEstate.Models
{
    public class PropertyDetail
    {
        public Property Property { get; set; }
        public User Users { get; set; }
        public Room Room { set; get; }
        public Address Address { set; get; }

    }
}