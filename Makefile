.PHONY: backend

backend:  ## Run application server in development
	python -m pip install -r backend/requirements.txt
	uvicorn backend.app.main:app --host localhost --port 8000 --reload
