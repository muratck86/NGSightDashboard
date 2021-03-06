using System;
using System.Collections.Generic;
using NGSightAPI.Models;

namespace NGSightAPI
{
    public class Helpers
    {
        private static readonly int IMEI_LENGTH = 15;
        private static readonly string X_POS_PREFIX = "36.";
        private static readonly string Y_POS_PREFIX = "30.";

        private static Random _rand = new Random();

        private static string GetRandom(IList<string> items)
        {
            return items[_rand.Next(items.Count)];
        }

        private static char GetRandomChar()
        {
            return (char)(_rand.Next(65, 91));
        }


        internal static string MakeUniqueCustomerName(List<string> names)
        {
            if (names.Count >= bizSuffix.Count * bizPrefix.Count)
            {
                throw new InvalidOperationException("Maximum number of unique name combinations exceeded.");
            }
            string name;
            do
            {
                name = MakeCustomerName();
            } while (names.Contains(name));
            return name;

        }

        internal static string MakeCustomerName()
        {
            var prefix = GetRandom(bizPrefix);
            var suffix = GetRandom(bizSuffix);
            return prefix + " " + suffix;
        }

        internal static string MakeCustomerEmail(string name)
        {
            return $"contact@{name.ToLower().Replace(" ","")}.com";
        }

        internal static string MakeState()
        {
            return GetRandom(usStates);
        }

        internal static decimal GetRandomOrderTotal()
        {
            return _rand.Next(100, 5000);
        }

        internal static DateTime GetRandomOrderPlaced()
        {
            var end = DateTime.Now;
            var start = end.AddDays(-90);

            TimeSpan possibleSpan = end - start;
            TimeSpan newSpan = new TimeSpan(0, _rand.Next((int)(possibleSpan.TotalMinutes)), 0);

            return start + newSpan;
        }

        internal static DateTime? GetRandomOrderCompleted(DateTime orderPlaced)
        {
            var now = DateTime.Now;
            var minLeadTime = TimeSpan.FromDays(7);
            var timePassed = now - orderPlaced;
            if (timePassed < minLeadTime)
            {
                return null;
            }

            return orderPlaced.AddDays(_rand.Next(6)).AddHours(_rand.Next(24)).AddMinutes(_rand.Next(60));
        }

        internal static string GetRandomBarcode(string pref, int totalLength)
        {
            var barcode = pref;
            for (int i = 0; i < totalLength - pref.Length; i++)
            {
                barcode += _rand.Next(10);
            }
            return barcode;
        }

        internal static string GetRandomBatteryStat()
        {
            return "" + _rand.Next(100);
        }

        internal static string GetRandomGSMNo()
        {
            var gsm = "05";
            gsm += _rand.Next(30, 50);
            gsm += _rand.Next(1000);
            return gsm + _rand.Next(9999);
        }

        internal static string GetRandomImei()
        {
            string imei = "";
            for (int i = 0; i < IMEI_LENGTH; i++)
            {
                imei += _rand.Next(10);
            }
            return imei;
        }

        internal static string GetRandomScooterName(int id)
        {
            return GetRandom(usStates) + GetRandom(usStates) + id;
        }

        internal static string GetRandomXPosition()
        {
                        var xPos = X_POS_PREFIX;
            xPos += _rand.Next(6, 8);
            for (int i = 0; i < 6; i++)
            {
                xPos += _rand.Next(10);
            }
            return xPos;
        }

        internal static string GetRandomYPosition()
        {
            var yPos = Y_POS_PREFIX;
            yPos += _rand.Next(85, 95);
            for (int i = 0; i < 5; i++)
            {
                yPos += _rand.Next(10);
            }
            return yPos;
        }

        internal static int GetRandomRate()
        {
            return _rand.Next(6) * 5 + 60;
        }

        private static readonly List<string> bizPrefix = new List<string>()
        {
            "ABC",
            "XYZ",
            "MainSt",
            "Sales",
            "Enterprise",
            "Ready",
            "Quick",
            "Budget",
            "Peak",
            "Magic",
            "Family",
            "Comfort"
        };
        private static readonly List<string> bizSuffix = new List<string>()
        {
            "Corporation",
            "Co",
            "Logistics",
            "Bakery",
            "Goods",
            "Foods",
            "Cleaners",
            "Hotels",
            "Planners",
            "Automotive",
            "Books"
        };

        private static readonly List<string> usStates = new List<string>()
        {
            "AK", "AL", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI",
            "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "CS", "SD", "TN", "TX", "UT",
            "VT", "VA", "WA", "WV", "WI", "WY"
        };

    }

}