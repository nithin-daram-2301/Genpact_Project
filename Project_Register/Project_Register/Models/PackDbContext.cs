using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Project_Register.Models;

public partial class PackDbContext : DbContext
{
    public PackDbContext()
    {
    }

    public PackDbContext(DbContextOptions<PackDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<Feedback> Feedbacks { get; set; }

    public virtual DbSet<Package> Packages { get; set; }

    public virtual DbSet<UserRegister> UserRegisters { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("server=DESKTOP-5RJDN9Q;database=PackDb;trusted_connection=true;trustservercertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Booking>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Bookings__3214EC073CCADF9F");

            entity.Property(e => e.CardNumber).HasMaxLength(20);
            entity.Property(e => e.Cvv).HasColumnName("CVV");
            entity.Property(e => e.Email).HasMaxLength(50);
            entity.Property(e => e.Mobile).HasMaxLength(12);
            entity.Property(e => e.Name).HasMaxLength(50);
            entity.Property(e => e.TravelDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<Feedback>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Feedback__3214EC07683E3489");

            entity.ToTable("Feedback");

            entity.Property(e => e.Uemail).HasMaxLength(255);
            entity.Property(e => e.Uname).HasMaxLength(255);
        });

        modelBuilder.Entity<Package>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Package__3214EC07FDE622FF");

            entity.ToTable("Package");

            entity.Property(e => e.Description).HasMaxLength(50);
            entity.Property(e => e.ImageName).HasMaxLength(50);
            entity.Property(e => e.Title).HasMaxLength(50);
        });

        modelBuilder.Entity<UserRegister>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__User_Reg__3214EC07466CFEB7");

            entity.ToTable("User_Register");

            entity.HasIndex(e => e.Uname, "UQ__User_Reg__9C5CAF9A3280B789").IsUnique();

            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.Mobile).HasMaxLength(15);
            entity.Property(e => e.Password).HasMaxLength(255);
            entity.Property(e => e.Uname).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
