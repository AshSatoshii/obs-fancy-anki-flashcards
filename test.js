alert("Hello! I am an alert box!!");

async function test() {
    
    result = await fetch('http://127.0.0.1:8765', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "action": 'deckNames',
            "version": 6
        })
    });
    
    const data = await result.json();
    alert(data.result);

    deckNames = [];
    for (i = 0; i < data.result.length; i++) {
        if(data.result[i].includes("Hidden::") || data.result[i].includes("Hidden") || data.result[i].includes("Default")) {
            continue;
        }
        else {
            deckNames.push(data.result[i]);
        }
    }
    alert(deckNames);

}

test();
