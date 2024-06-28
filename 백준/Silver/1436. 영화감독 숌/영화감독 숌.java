import java.io.*;
import java.util.Scanner;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));


        int N = Integer.parseInt(br.readLine());
        br.close();
        int DoomsDay = 666;
        int cnt = 1;

        while(cnt != N){
            DoomsDay++;
            if(String.valueOf(DoomsDay).contains("666")){
                cnt++;
            }
        }
        System.out.println(DoomsDay);


    }

}
