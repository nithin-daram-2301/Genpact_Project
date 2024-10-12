using System;
using System.Collections.Generic;

namespace Project_Register.Models;

public partial class UserRegister
{
    public int Id { get; set; }

    public string Uname { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string? Mobile { get; set; }

    public string? Email { get; set; }
}
