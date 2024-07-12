import java.util.Scanner;
import java.io.IOException;
import java.io.*;

public class Main {
    static int n = 0;
    static int k = 0;
    static int []arr;
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        k = sc.nextInt();
        arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        for(int k = 0; k < arr.length - 1; k++){
            for(int j = 0; j < arr.length - 1; j++){
                if(arr[j] < arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        System.out.println(arr[k-1]);
        sc.close();
    }
}
