
using System; 
  
class program 
{ 
  
    static void hanoi(int n, char f,char t, char v) 
    { 
        if (n == 0) { 
            ;
        } 
        else {
        hanoi(n-1, f, v, t); 
        Console.WriteLine("Ryk disc " + f + " til " + t); 
        hanoi(n-1, v, t, f); 
        }
    } 
    public static void Main() 
    { 
        int n = 5;  

        hanoi(n, 'A', 'C', 'B');  
    } 
} 
