using System;
using System.Collections.Generic;

namespace Project_Booking.Models;

public partial class UserRegister
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Password { get; set; }

    public string? Email { get; set; }
}
