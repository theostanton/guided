import requests


def execute(guide_id: str):
    print('computing', guide_id)
    url = f"http://localhost:5002/{guide_id}"
    response = requests.get(url)

    print('response', response.status_code)
    print('response', response.text)
    print('computed', guide_id)
