using System;
using System.Collections.Generic;

namespace Project_Register.Models;

public partial class Booking
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Email { get; set; }

    public string? Mobile { get; set; }

    public DateTime? TravelDate { get; set; }

    public int NumberOfGuests { get; set; }

    public string? CardNumber { get; set; }

    public int? Cvv { get; set; }
}
