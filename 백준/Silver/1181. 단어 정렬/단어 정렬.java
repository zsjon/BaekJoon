import java.util.*;
import java.io.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int n = Integer.parseInt(br.readLine());
        String []word = new String[n];

        for(int i = 0; i < n; i++){
            word[i] = br.readLine();
        }
        br.close();

        Arrays.sort(word, (o1, o2) -> {
            if(o1.length() == o2.length()){
                return o1.compareTo(o2);
            }else{
                return o1.length() - o2.length();
            }
        });

        sb.append(word[0]).append('\n');

        for(int i = 1; i < n; i++){
            if(!word[i].equals(word[i - 1])) {
                sb.append(word[i]).append("\n");
            }
        }
        System.out.println(sb);


    }
}
