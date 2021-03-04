namespace NGSightAPI.Models 
{
    public class Scooter 
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Barcode { get; set; }
        public string Description { get; set; }
        public int Rate { get; set; }
        public string Imei { get; set; }
        public string GsmNumber { get; set; }
        public string PositionX { get; set; }
        public string PositionY { get; set; }
        public string Battery { get; set; }
    }
}