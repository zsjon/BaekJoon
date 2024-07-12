import java.util.Scanner;
import java.io.IOException;
import java.io.*;
import java.util.Collections;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        int n = sc.nextInt();
        ArrayList<Integer> list = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            list.add(sc.nextInt());
        }

        Collections.sort(list);

        for (int j : list) {
            sb.append(j).append("\n");
        }
        System.out.println(sb);
        sc.close();
    }
}

