from pydantic import BaseModel, ConfigDict, Field, field_validator

class Libro(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True)

    id: str | None = None
    titolo: str = Field(..., min_length=1, max_length=200)
    autore: str = Field(..., min_length=1, max_length=50)
    anno: str = Field(..., min_length=1, max_length=10)
    genere: str = Field(..., min_length=1, max_length=50)

    """
    cls è l'oggetto della classe ed è obbligatorio come parametro da @classmethod
    v è la stringa autore
    """
    @field_validator('autore')
    @classmethod
    def validate_autore(cls, v: str) -> str:
        v = v.strip()
        parti = [p for p in v.split() if p]

        if len(parti) < 2:
            raise ValueError("Necessari nome e cognome per l'autore")

        return ' '.join(parti)