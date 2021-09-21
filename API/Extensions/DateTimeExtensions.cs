using System;

namespace API.ExtensionsExtensions
{
    public static class DateTimeExtensions
    {
        public static int AgeCalculation(this DateTime dob)
        {
            var today = DateTime.Today;
            var age = today.Year - dob.Year;
            if (dob.Date > today.AddYears(-age)) --age;
            return age;
        }
    }
}