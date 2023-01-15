from  fastapi import FastAPI

app = FastAPI()

@app.get('/board')
def get_board():
    board_data = {
        'tasks': {},
        'columns': {},
        'columnOrder': []
    }
    return {'board':{}}

