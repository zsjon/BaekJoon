function solution(survey, choices) {
    var answer = '';
    let score = {'1': 3, '2': 2, '3': 1, '4': 0, '5': 1, '6': 2, '7': 3};
    let result = {'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0}
    
    survey = survey.map(data => data.split(''));
    choices.map((choice, index) => {
        choice < 4 ? result[survey[index][0]] += score[choice]
            : result[survey[index][1]] += score[choice]
    });
    
    result["R"] >= result["T"] ? answer+="R" : answer+="T";
    result["C"] >= result["F"] ? answer+="C" : answer+="F";
    result["J"] >= result["M"] ? answer+="J" : answer+="M";
    result["A"] >= result["N"] ? answer+="A" : answer+="N";
    
    return answer;
}