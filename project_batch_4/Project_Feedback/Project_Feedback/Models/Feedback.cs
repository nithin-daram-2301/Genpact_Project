using System;
using System.Collections.Generic;

namespace Project_Feedback.Models;

public partial class Feedback
{
    public int Id { get; set; }

    public string? Uname { get; set; }

    public string? Uemail { get; set; }

    public int? Rating { get; set; }

    public string? Comment { get; set; }
}
