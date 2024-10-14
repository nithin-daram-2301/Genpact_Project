using System;
using System.Collections.Generic;

namespace Project_Register.Models;

public partial class Package
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public string? ImageName { get; set; }

    public string? Description { get; set; }

    public double? Price { get; set; }
}
