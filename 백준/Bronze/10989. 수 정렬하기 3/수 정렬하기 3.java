import java.util.Scanner;
import java.io.IOException;
import java.io.*;
import java.util.Collections;
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int n = Integer.parseInt(br.readLine());
        int arr[] = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }
        Arrays.sort(arr);

        for (int j = 0; j < n; j++) {
            sb.append(arr[j]).append("\n");
        }
        System.out.println(sb);
    }
}
