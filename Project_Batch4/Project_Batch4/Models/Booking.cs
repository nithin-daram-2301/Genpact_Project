using System;
using System.Collections.Generic;

namespace Project_Batch4.Models;

public partial class Booking
{
    public int BookingId { get; set; }

    public int? UserId { get; set; }

    public int? PackageId { get; set; }

    public int? NumberOfGuests { get; set; }

    public string? CardNumber { get; set; }

    public int? Cvv { get; set; }

    public DateTime? BookingDate { get; set; }

    public virtual Package? Package { get; set; }

    public virtual User? User { get; set; }
}
