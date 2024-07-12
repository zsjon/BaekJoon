import java.util.*;
import java.io.IOException;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] st = br.readLine().split("");
        Arrays.sort(st, Collections.reverseOrder());
        for(int i=0;i<st.length;i++){
            System.out.print(st[i]);
        }

    }
}
