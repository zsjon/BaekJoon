import java.util.Scanner;
import java.io.*;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter wr = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(br.readLine());
        br.close();

        int cont = Integer.MAX_VALUE;
        int smallest_i = -1;
        int smallest_j = -1;

        for(int i = 0; i <= n / 5; i++){
            for(int j = 0; j <= n / 3; j++){
                if((5 * i) + (j * 3) == n){
                    if(i + j < cont){
                        cont = i + j;
                        smallest_i = i;
                        smallest_j = j;
                    }
                }
            }
        }

        if (cont == Integer.MAX_VALUE){
            System.out.println(-1);
        }else {
            System.out.println(cont);
        }
    }
}
