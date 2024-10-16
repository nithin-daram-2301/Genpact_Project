using System;
using System.Collections.Generic;

namespace Project_Batch4.Models;

public partial class Package
{
    public int PackageId { get; set; }

    public string Title { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string? ImageName { get; set; }

    public decimal Price { get; set; }

    public string Duration { get; set; } = null!;

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}
