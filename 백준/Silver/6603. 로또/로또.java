import java.util.Scanner;
import java.io.*;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {
    static int k;
    static int[] s;
    static boolean[] visit;
    static StringBuilder sb = new StringBuilder();

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));


        while (true) {
            String st = br.readLine();
            String []input = st.split(" ");
            k = Integer.parseInt(input[0]);
            if(k == 0) break;
            s = new int[k];
            visit = new boolean[k];
            for (int i = 0; i < k; i++) {
                s[i] = Integer.parseInt(input[i+1]);
            }
            backTracking(0, 0);
            System.out.println();
        }
//        System.out.println(sb);


    }
    static void backTracking(int start, int depth){
        if(depth == 6){
            for(int i = 0; i < k; i++){
                if(visit[i]){
                    System.out.print(s[i]+" ");
                }
            }
            System.out.println();
        }
        for(int i = start; i < k; i++){
            visit[i] = true;
            backTracking(i+1, depth+1);
            visit[i] = false;
        }
    }
}
