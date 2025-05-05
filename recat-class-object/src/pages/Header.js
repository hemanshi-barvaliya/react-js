
function Header() {

    var student = [
  
      { id: '1', name: 'hemanshi', sub1: 25, sub2: 35, sub3: 10, sub4: 65, sub5: 88 },
      { id: '2', name: 'priya', sub1: 37, sub2: 86, sub3: 59, sub4: 69, sub5: 98 },
      { id: '3', name: 'arti', sub1: 98, sub2: 56, sub3: 35, sub4: 35, sub5: 35 },
      { id: '4', name: 'purvi', sub1: 35, sub2: 35, sub3: 33, sub4: 33, sub5: 33 },
    ];
    var total, per, max, min, cnt = 0;
  
    return (
      <>
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Sub1</th>
              <th>Sub2</th>
              <th>Sub3</th>
              <th>Sub4</th>
              <th>Sub5</th>
              <th>Total</th>
              <th>Percent</th>
              <th>Max</th>
              <th>min</th>
              <th>Grade</th>
              <th></th>
              <th>Result</th>
  
            </tr>
          </thead>
          <tbody>
            {
              student.map((v) => (
  
                <tr>
                  <td>{v.id} </td>
                  <td>{v.name}</td>
                  <td>{v.sub1}</td>
                  <td>{v.sub2}</td>
                  <td>{v.sub3}</td>
                  <td>{v.sub4}</td>
                  <td>{v.sub5}</td>
                  <td>{total = v.sub1 + v.sub2 + v.sub3 + v.sub4 + v.sub5}</td>
                  <td>{per = total / 5}</td>
                  <td>{max = Math.max(v.sub1, v.sub2, v.sub3, v.sub4, v.sub5)}</td>
                  <td>{min = Math.min(v.sub1, v.sub2, v.sub3, v.sub4, v.sub5)}</td>
                  <td>{per >= 90 ? 'A' :
                    per >= 80 ? 'B' :
                      per >= 70 && per < 80 ? 'C' :
                        per >= 60 && per < 50 ? 'D' :
                          per >= 35 ? 'E' : '***'}
                  </td>
  
                  {cnt = 0}{v.sub1 < 35 ? cnt++ : cnt}
                  {v.sub2 < 35 ? cnt++ : cnt}
                  {v.sub3 < 35 ? cnt++ : cnt}
                  {v.sub4 < 35 ? cnt++ : cnt}
                  {v.sub5 < 35 ? cnt++ : cnt}
  
                  <td>{cnt == 0 ? 'Pass' : cnt <= 2 ? 'ATKT' : 'Fail'}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
  
  
      </>
    );
  }
  
  export default Header;

