import java.util.Scanner;
import java.io.*;
import java.util.StringTokenizer;
import java.io.IOException;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[][] dungci = new int[n][2];
        int[] ranks = new int[n];
        for(int i = 0; i < ranks.length; i++){
            ranks[i] = 1;
        }

        for (int i = 0; i < dungci.length; i++) {
            dungci[i][0] = sc.nextInt();
            dungci[i][1] = sc.nextInt();
        }

        for (int i = 0; i < dungci.length; i++){
            int rank = 1;
            for(int j = 0; j < dungci.length; j++){
                if(dungci[i][0] < dungci[j][0] && dungci[i][1] < dungci[j][1]){
                    rank++;
                    ranks[i] = rank;
                }
            }
        }
        for (int i = 0; i < ranks.length; i++) {
            System.out.print(ranks[i] + " ");
        }

    }
}
