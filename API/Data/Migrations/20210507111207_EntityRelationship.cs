using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class EntityRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Lookingfor",
                table: "Users",
                newName: "LookingFor");

            migrationBuilder.RenameColumn(
                name: "DateofBirth",
                table: "Users",
                newName: "DateOfBirth");

            migrationBuilder.RenameColumn(
                name: "LastViewed",
                table: "Users",
                newName: "LastActive");

            migrationBuilder.RenameColumn(
                name: "KnowAs",
                table: "Users",
                newName: "KnownAs");

            migrationBuilder.RenameColumn(
                name: "Interest",
                table: "Users",
                newName: "Interests");

            migrationBuilder.RenameColumn(
                name: "isMain",
                table: "Photos",
                newName: "IsMain");

            migrationBuilder.RenameColumn(
                name: "URL",
                table: "Photos",
                newName: "Url");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LookingFor",
                table: "Users",
                newName: "Lookingfor");

            migrationBuilder.RenameColumn(
                name: "DateOfBirth",
                table: "Users",
                newName: "DateofBirth");

            migrationBuilder.RenameColumn(
                name: "LastActive",
                table: "Users",
                newName: "LastViewed");

            migrationBuilder.RenameColumn(
                name: "KnownAs",
                table: "Users",
                newName: "KnowAs");

            migrationBuilder.RenameColumn(
                name: "Interests",
                table: "Users",
                newName: "Interest");

            migrationBuilder.RenameColumn(
                name: "Url",
                table: "Photos",
                newName: "URL");

            migrationBuilder.RenameColumn(
                name: "IsMain",
                table: "Photos",
                newName: "isMain");
        }
    }
}
