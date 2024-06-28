import java.io.*;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {
    public static int min = 64;
    public static boolean[][] board;

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        board = new boolean [N][M];

        for(int i = 0; i < N; i++){
            String Line = br.readLine();
            for(int j = 0; j < M; j++){
                if(Line.charAt(j) == 'W'){
                    board[i][j] = true;
                }else{
                    board[i][j] = false;
                }
            }
        }

        int row = N - 7;
        int col = M - 7;

        for(int i = 0; i < row; i++){
            for(int j = 0; j < col; j++){
                finding8x8(i, j);
            }
        }

        System.out.println(min);



    }
    public static void finding8x8(int x, int y){
        int maxX = x + 8;
        int maxY = y + 8;
        int cnt = 0;
        boolean Color  = board[x][y];
        for(int i = x; i < maxX; i++){
            for(int j = y; j < maxY; j++){
                if(board[i][j] != Color){
                    cnt++;
                }
                Color = (!Color);
            }
            Color = !Color;
        }
        cnt = Math.min(cnt, 64 - cnt);
        min = Math.min(min, cnt);
    }
}
