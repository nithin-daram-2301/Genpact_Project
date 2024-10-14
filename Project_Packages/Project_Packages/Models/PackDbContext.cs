using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Project_Packages.models;

public partial class PackDbContext : DbContext
{
    public PackDbContext()
    {
    }

    public PackDbContext(DbContextOptions<PackDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Package> Packages { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("server=DESKTOP-5RJDN9Q;database=PackDb;trusted_connection=true;trustservercertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Package>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Package__3214EC07FDE622FF");

            entity.ToTable("Package");

            entity.Property(e => e.Description).HasMaxLength(50);
            entity.Property(e => e.ImageName).HasMaxLength(50);
            entity.Property(e => e.Title).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
