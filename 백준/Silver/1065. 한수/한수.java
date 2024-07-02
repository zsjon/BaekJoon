import java.util.Scanner;
import java.io.*;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int hansoo[] = new int[3];
        int cnt = 0;
        for(int i = 1; i <= n; i++) {
            if(0 < i && i < 100){
                cnt = i;
            }
            else if(i == 1000){
                break;
            }
            else{
                int k = 0;
                int t = i;
                while(t > 0){
                    hansoo[k] = t % 10;
                    t /= 10;
                    k++;
                }
                if(hansoo[0] - hansoo[1] == hansoo[1] - hansoo[2]){
                    cnt++;
                }
            }
        }
        System.out.println(cnt);
        sc.close();

    }
}
