import java.util.*;
import java.io.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st;

        int n = Integer.parseInt(br.readLine());
        int [][]arrays = new int[n][2];

        for(int i = 0; i < n; i++){
            st = new StringTokenizer(br.readLine());
            arrays[i][0] = Integer.parseInt(st.nextToken());
            arrays[i][1] = Integer.parseInt(st.nextToken());
        }
        br.close();

        Arrays.sort(arrays, (n1, n2) -> {
            return n1[0] != n2[0] ? n1[0] - n2[0] : n1[1] - n2[1];
        });

        for(int i = 0; i < n; i++){
            bw.write(arrays[i][0] + " " + arrays[i][1] + "\n");
        }
        bw.flush();
        bw.close();
    }
}