from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

# Mount static folder (CSS, JS, images)
app.mount("/front", StaticFiles(directory="front"), name="front")

# Jinja2 templates folder
templates = Jinja2Templates(directory="front")

# Home route
@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    context = {"request": request, "title": "FastAPI + HTML + JS Example"}
    return templates.TemplateResponse("index.html", context)
