import requests

#Add your search e.g. TajMahal
search_text = ""
#Enter the API Key generated from OLA developer portal
api_key = "sZSytl79psJ38265tWRRj6RRZzTqU4zCQvXglZo4"
url = f"https://api.olamaps.io/places/v1/autocomplete?input={search_text}&api_key={api_key}"

response = requests.get(url)
if response.status_code == 200:
    data = response.json()
    # Please process the data as required
    print(data)
else:
    print(f"Error: {response.status_code} - {response.text}")