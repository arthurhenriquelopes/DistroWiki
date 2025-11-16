"""
Handler para Vercel - exporta a aplicação FastAPI.

O Vercel precisa de um módulo Python que exporte a aplicação como 'app'.
Este arquivo faz o bridge entre o routing do Vercel e a aplicação FastAPI.
"""

from api.main import app

__all__ = ["app"]
