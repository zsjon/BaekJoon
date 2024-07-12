import java.util.*;
import java.io.IOException;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        String[] st = br.readLine().split("");
        Arrays.sort(st, Collections.reverseOrder());
        for (String s : st) {
            sb.append(s);
        }
        System.out.println(sb);
    }
}
