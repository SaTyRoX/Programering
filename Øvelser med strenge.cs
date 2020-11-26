using System;

namespace opgaver_med_strenge
{
    class Program
    {
        static void Main(string[] args)
        {
            opg1();
            opg2();
            opg2b();
            opg3();
            opg4();
        }

        static void opg1() {
            string text = "Hej med dig";
            int firstSpace = text.IndexOf(" ");
            Console.WriteLine("Opgave 1: ");
            Console.WriteLine("Der er " + firstSpace + " bogstaver inden det første mellemrum");
            Console.WriteLine("");
        }

        static void opg2() {
            string text ="Hej med dig";
            int firstSpace = text.IndexOf(" ");
            string string_opg2_edit = text.Remove(0, firstSpace);

            Console.WriteLine("Opgave 2: ");
            Console.WriteLine(string_opg2_edit);
            Console.WriteLine("");
        }

        static void opg2b() {
            string text = "   Hej med dig";
            string text_trim = text.Trim();
            int firstSpace = text_trim.IndexOf(" ");
            string text_edit = text_trim.Remove(0, firstSpace);

            Console.WriteLine("Opgave 2b: ");
            Console.WriteLine(text_edit);
            Console.WriteLine("");
        }

        static void opg3() {
            int space = 0;
            string text = "Hej med dig, min yndlingsfarve er rød";

         for (int i = 0; i < text.Length; i++) {
             if (text[i] == ' ') {
                 space++;
             }
         }
            Console.WriteLine("Opgave 3: ");
            Console.WriteLine("Der er " + space + " mellemrum i teksten");
            Console.WriteLine("");

        }

        static void opg4() {
            string text = "Hej jeg hedder Benjamin. Jeg har måske en cykel";
            
            if (text.Contains("måske")) {
            string text_edit = text.Replace("måske", "");
                
                Console.WriteLine("Opgave 4: ");
                Console.WriteLine("Text: " + text);
                Console.WriteLine("Text uden ordet 'måske' : " + text_edit);
                Console.WriteLine("");

            }
        }

        static void opg5() {
           ?
        }

    }
}
