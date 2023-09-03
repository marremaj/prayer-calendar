.PHONY: backend

PYTHON=/bin/python3
backend:  ## Run application server in development
	$(PYTHON) -m pip install -r backend/requirements.txt
	uvicorn backend.app.main:app --host localhost --port 8000 --reload
