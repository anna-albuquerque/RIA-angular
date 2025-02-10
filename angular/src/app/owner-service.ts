import { Injectable } from "@angular/core";
import { Owner } from "./owner";

@Injectable({
    providedIn: 'root'
})
export class OwnerService {
    private beans: Owner[] = [
        new Owner("John Doe", 30, true),
        new Owner("Jane Smith", 25, false),
        new Owner("Carlos Silva", 40, true)
    ]; // Adicionando dados iniciais para testes

    createBean(): Owner {
        return new Owner("", 0, false);
    }

    insert(bean: Owner): Owner {
        this.beans.push(bean);
        return bean;
    }

    remove(id: string): void {
        const index = this.beans.findIndex(localBean => localBean.name === id);
        if (index > -1) {
            this.beans.splice(index, 1);
        }
    }

    update(id: string, bean: Owner): Owner {
        const index = this.beans.findIndex(existingBean => existingBean.name === id);
        if (index > -1) {
            this.beans[index] = bean;
        }
        return bean;
    }

    findAll(): Owner[] {
        return [...this.beans]; // Retorna uma cópia para evitar mutações
    }

    findById(id: string): Owner | null {
        return this.beans.find(bean => bean.name === id) || null;
    }
}
