using System;
using System.Collections.Generic;

namespace Project_Batch4.Models;

public partial class FeedBack
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? Rating { get; set; }

    public string? Comment { get; set; }

    public virtual User? User { get; set; }
}
