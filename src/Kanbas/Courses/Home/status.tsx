function Status() {
    return(
        <>
        <div className="flex-grow-0 me-2 d-none d-lg-block">
            <h4>Course Status</h4>
            <table>
              <tbody>
                <tr>
                  <td>
                    <button>Unpublish</button>
                    <button>Publish</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <button>Import Existing Content</button><br />
            <button>Import From Commons</button><br />
            <button>Choose Home Page</button><br /> <br/>
            <p>To Do</p>
            <hr />
            <ul>
              <li>To do #1</li>
              <li>To do #2</li>
            </ul>
          </div>
        </>
    )
}


export default Status