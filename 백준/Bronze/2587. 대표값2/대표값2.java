import java.util.Scanner;
import java.io.IOException;
import java.io.*;

public class Main {
    static int sum = 0;
    static int avg = 0;
    static int []arr = new int[5];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        for(int i = 0; i < 5; i++){
            arr[i] = sc.nextInt();
        }
        for(int j = 0; j < arr.length; j++){
            sum += arr[j];
        }
        avg = sum / 5;

        for(int k = 0; k < arr.length-1; k++){
            for(int j = 0; j < arr.length-1; j++){
                if(arr[j] > arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        int center = arr[2];
        System.out.println(avg);
        System.out.println(center);
        sc.close();
    }
}
