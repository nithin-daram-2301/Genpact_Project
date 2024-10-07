using System.ComponentModel.DataAnnotations;

namespace Projectday2.Models
{
    public class ContentItem
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        public string ImageUrl { get; set; }

        public string Description { get; set; }

        public string HtmlContent { get; set; }
    }
}
